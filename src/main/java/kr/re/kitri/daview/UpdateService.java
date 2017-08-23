package kr.re.kitri.daview;

import kr.re.kitri.daview.model.ContentId;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class UpdateService {
    private static String Address;
    private static URL url;
    private static BufferedReader br;
    private static HttpURLConnection conn;
    private static String protocol = "GET";

    public JSONObject getJsonFromApiUpdate(ContentId i) throws JSONException {

        Address = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=0mj%2FWBriI%2FoWh0a%2BaQxwlnnQnQSVYIZqumVqqLGi%2B1JuxI8SBMoaZ%2FQioBucRXNdZ5gWWnDdsFQZDBRXqMvttQ%3D%3D&contentTypeId=15&contentId="
                + i + "&MobileOS=ETC&MobileApp=daview&defaultYN=Y&firstImageYN=Y&areaCodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json";

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
        String check = "{\"response\":{\"header\":{\"resultCode\":\"0000\",\"resultMsg\":\"OK\"},\"body\":{\"items\":\"\",\"numOfRows\":10,\"pageNo\":1,\"totalCount\":0}}}";

        try {
            while ((line = br.readLine()) != null) {
                response.append(line);
            }

        } catch (IOException e) {
            System.out.println("br 에러");
            e.printStackTrace();
        }

        JSONObject item=null;

        if(response.toString().length() <= 200){
            return item;
        }
        else {
            JSONObject jsonObject = new JSONObject(response.toString());
            item = jsonObject.getJSONObject("response")
                    .getJSONObject("body")
                    .getJSONObject("items")
                    .getJSONObject("item");

            //System.out.println(item.toString());

            return item;
        }
    }

    public String updateItemFromDB(JSONObject json, Connection conn) {
        PreparedStatement pstmt = null;

        if(json==null)
            return null;

        else {
            try {
                String query = "UPDATE festival SET overview = ? WHERE contentId = ?";
                pstmt = conn.prepareStatement(query);
                JSONObject itemObj = json;

                pstmt.setObject(1, itemObj.opt("overview"));
                pstmt.setObject(2, itemObj.opt("contentid"));

                pstmt.executeUpdate();

                System.out.println("update ok..");
                conn.close();
                System.out.println("connection closed..");
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return "update succes";
        }
    }


    public String updateLinkFromDB(JSONObject json, Connection conn) {
        PreparedStatement pstmt = null;

        if(json==null)
            return null;

        else {
            try {
                String query = "UPDATE festival SET homepage = ? WHERE contentId = ?";
                pstmt = conn.prepareStatement(query);
                JSONObject itemObj = json;

                pstmt.setObject(1, itemObj.opt("homepage"));
                pstmt.setObject(2, itemObj.opt("contentid"));

                pstmt.executeUpdate();

                System.out.println("update ok..");
                conn.close();
                System.out.println("connection closed..");
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return "update succes";
        }
    }

    public List<ContentId> getContentIdByDB() {

        Connection conn = getConnection();

        String query = "select contentId from festival;";
        List<ContentId> contentIdArrayList = new ArrayList<>();
        ContentId contentId;

        try {
            PreparedStatement pstmt = conn.prepareStatement(query);
            ResultSet rs = pstmt.executeQuery();
            while(rs.next()) {
                contentId = new ContentId();
                contentId.setContentId(rs.getInt(1));
                contentIdArrayList.add(contentId);

            }
            conn.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return contentIdArrayList;
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
            conn = DriverManager.getConnection
                    (InsertData.DB_URL, InsertData.USERNAME, InsertData.PASSWORD);
            System.out.println("Connection ok..");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }

}