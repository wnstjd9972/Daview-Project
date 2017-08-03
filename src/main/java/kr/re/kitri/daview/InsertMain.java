package kr.re.kitri.daview;

import kr.re.kitri.daview.InsertService;
import org.json.JSONArray;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

import java.sql.Connection;

@EnableAspectJAutoProxy
public class InsertMain {

    public static void main(String[] args) {
        InsertService service = new InsertService();
        for(int i = 1 ; i <= 8; i++) {
            String parameter = "&cat1=A02&cat2=A0207&areaCode="+i+"&numOfRows=300&MobileOS=ETC&MobileApp=DaView&_type=json";
            JSONArray json = service.getJsonFromApi(parameter);
            Connection conn = service.getConnection();
            System.out.println(service.insertItemFromDB(json, conn));
        }

        for(int e = 31 ; e <= 39; e++) {
            String parameter = "&cat1=A02&cat2=A0207&areaCode="+e+"&numOfRows=300&MobileOS=ETC&MobileApp=DaView&_type=json";
            JSONArray json = service.getJsonFromApi(parameter);
            Connection conn = service.getConnection();
            System.out.println(service.insertItemFromDB(json, conn));
        }
    }
}
