package kr.re.kitri.daview.dao;

import kr.re.kitri.daview.InsertService;
import kr.re.kitri.daview.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
@Repository

public class MainDao {

    @Autowired InsertService insertService;
    public List<Item> getXY() {

       Connection con  = insertService.getConnection();
       String query = "select * from festival;";List<Item> itemArrayList = new ArrayList<>();
       Item item;
        try {
            PreparedStatement pstmt = con.prepareStatement(query);
            ResultSet rs = pstmt.executeQuery();
            while(rs.next()) {
                item = new Item();
                item.setAreaCode(rs.getInt(1));
                item.setAddr1(rs.getString(2));
                item.setContentId(rs.getInt(3));
                item.setEventStartDate(rs.getDate(4));
                item.setEventEndDate(rs.getDate(5));
                item.setFirstImage(rs.getString(6));
                item.setMapX(rs.getDouble(7));
                item.setMapY(rs.getDouble(8));
                item.setReadCount(rs.getInt(9));
                item.setTel(rs.getString(10));
                item.setTitle(rs.getString(11));
                itemArrayList.add(item);

            }
        con.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return itemArrayList;
    }

}
