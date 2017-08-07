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
public class DetailBoardDao {

    @Autowired
    InsertService insertService;

    public List<Item> selectItemByContentId(int contentId) {

        Connection con  = insertService.getConnection();
        String query = "select addr1, eventStartDate, eventEndDate, firstImage," +
                "mapX, mapY, readCount, tel, title from festival WHERE contentId = ?;";
        List<Item> itemArrayList = new ArrayList<>();
        Item item;
        try {
            PreparedStatement pstmt = con.prepareStatement(query);
            pstmt.setInt(1,contentId);
            ResultSet rs = pstmt.executeQuery();
            while(rs.next()) {
                item = new Item();
                item.setAddr1(rs.getString(1));
                item.setEventStartDate(rs.getDate(2));
                item.setEventEndDate(rs.getDate(3));
                item.setFirstImage(rs.getString(4));
                item.setMapX(rs.getDouble(5));
                item.setMapY(rs.getDouble(6));
                item.setReadCount(rs.getInt(7));
                item.setTel(rs.getString(8));
                item.setTitle(rs.getString( 9));
                itemArrayList.add(item);
            }
            con.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return itemArrayList;
    }

}

