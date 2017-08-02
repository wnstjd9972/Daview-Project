package kr.re.kitri.daview;
import org.json.JSONArray;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

import java.sql.Connection;

@EnableAspectJAutoProxy
public class InsertMain {

    public static void main(String[] args) {

        InsertService service = new InsertService();
        String parameter = "&cat1=A02&cat2=A0207&areaCode=1&numOfRows=300&MobileOS=ETC&MobileApp=DaView&_type=json";
        JSONArray json = service.getJsonFromApi(parameter);
        Connection conn = service.getConnection();
        System.out.println(service.insertItemFromDB(json,conn));
    }
}
