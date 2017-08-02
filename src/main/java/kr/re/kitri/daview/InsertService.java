package kr.re.kitri.daview;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
@Service
public class InsertService {
    private static String Address;
    private static URL url;
    private static BufferedReader br;
    private static HttpURLConnection conn;
    private static String protocol = "GET";

    public JSONArray getJsonFromApi(String parameter) {
        String point = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?";
        String serviceKey = "mTy6RIO%2FUanpU8PccBrEB%2BJgzQk5jV%2BbKB2ezfRspybCOoVYDMXegKeGvrzhtwJz44WCumfb%2BbXcBDPf28nLtQ%3D%3D";
        Address = point + "ServiceKey=" + serviceKey + parameter;

        try {
            url = new URL(Address);
        } catch (MalformedURLException e) {
            e.printStackTrace();
            System.out.println("URL 오류");
        }
        try {
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod(protocol);
            br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("conn 오류");
        }

        String line;
        StringBuffer response = new StringBuffer();

        try {
            while ((line = br.readLine()) != null) {
                response.append(line);
            }

        } catch (IOException e) {
            System.out.println("br 에러");
            e.printStackTrace();
        }

        JSONObject jsonObject = new JSONObject(response.toString());
        JSONArray item = jsonObject.getJSONObject("response")
                .getJSONObject("body")
                .getJSONObject("items")
                .getJSONArray("item");
        return item;

    }


    public String insertItemFromDB(JSONArray item, Connection conn) {
        PreparedStatement pstmt = null;

        try {
            for (Object i : item) {
                String query = "INSERT INTO festival values (?,?,?,?,?,?,?,?,?,?,?)";
                pstmt = conn.prepareStatement(query);
                JSONObject itemObj = (JSONObject) i;
                pstmt.setInt(1, itemObj.getInt("areacode"));
                pstmt.setString(2, itemObj.getString("addr1"));
                pstmt.setInt(3, itemObj.getInt("contentid"));
                pstmt.setInt(4, itemObj.getInt("eventstartdate"));
                pstmt.setInt(5, itemObj.getInt("eventenddate"));
                pstmt.setObject(6, itemObj.opt("firstimage"));
                pstmt.setDouble(7, itemObj.getDouble("mapx"));
                pstmt.setDouble(8, itemObj.getDouble("mapy"));
                pstmt.setInt(9, itemObj.getInt("readcount"));
                pstmt.setString(10, itemObj.optString("tel"));
                pstmt.setString(11, itemObj.getString("title"));
                pstmt.executeUpdate();
            }

            System.out.println("insert ok..");
            conn.close();
            System.out.println("connection closed..");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return "succes";
    }


    public Connection getConnection() {
        Connection conn = null;
        try {
            Class.forName(InsertData.DRIVER_MYSQL).newInstance();
            System.out.println("driver loading ok..");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        }

        try {
            conn =
                    DriverManager.getConnection
                            (InsertData.DB_URL, InsertData.USERNAME, InsertData.PASSWORD);
            System.out.println("Connection ok..");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }
}
