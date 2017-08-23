package kr.re.kitri.daview.dao;

import kr.re.kitri.daview.InsertService;
import kr.re.kitri.daview.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

@Repository
public class Area6Dao {

    @Autowired
    InsertService insertService;

    public List<Item> getArea6() {
        Connection con  = insertService.getConnection();
        String query = "select firstImage, title, contentId, eventStartDate, eventEndDate, readCount, addr1 from festival " +
                "WHERE areaCode =39 ORDER BY readcount DESC;";
        List<Item> itemArrayList = new ArrayList<>();
        Item item;
        try {
            PreparedStatement pstmt = con.prepareStatement(query);
            ResultSet rs = pstmt.executeQuery();
            while(rs.next()) {
                item = new Item();
                item.setFirstImage(rs.getString(1));
                item.setTitle(rs.getString(2));
                item.setContentId(rs.getInt(3));
                item.setEventStartDate(rs.getDate(4));
                item.setEventEndDate(rs.getDate(5));
                item.setReadCount(rs.getInt(6));
                item.setAddr1(rs.getString(7));

                itemArrayList.add(item);

            }
            con.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return itemArrayList;
    }
}
