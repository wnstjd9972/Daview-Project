package kr.re.kitri.daview;

import kr.re.kitri.daview.model.ContentId;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

import java.sql.Connection;
import java.util.List;

@EnableAspectJAutoProxy
public class UpdateMain {
    public static void main(String[] args) {
        UpdateService service = new UpdateService();

        List<ContentId> list = service.getContentIdByDB();


        //System.out.println(list);


        for (ContentId i : list) {
            JSONObject json = service.getJsonFromApiUpdate(i);
            Connection conn = service.getConnection();
            //System.out.println(service.updateItemFromDB(json, conn));
            //System.out.println(i);

            /*JSONObject json1 = service.getJsonFromApiUpdate(i);
            Connection conn1 = service.getConnection();*/
            System.out.println(service.updateLinkFromDB(json, conn));
        }
    }
}