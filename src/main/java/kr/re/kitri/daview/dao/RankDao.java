package kr.re.kitri.daview.dao;

import kr.re.kitri.daview.InsertService;
import kr.re.kitri.daview.model.Rank;
import kr.re.kitri.daview.service.RankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class RankDao {

    @Autowired
    RankService rankService;


    public List<Rank> getRankFestival() {
        String query = "SELECT title, addr1, readCount, eventStartDate, eventEndDate FROM festival " +
                "ORDER BY readCount DESC LIMIT 10";

        Connection conn = rankService.getConnection();

        List<Rank> rankArrayList = new ArrayList<>();
        Rank rank;


        try {
            PreparedStatement pstmt = conn.prepareStatement(query);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()){
                rank = new Rank();

                rank.setTitle(rs.getString(1));
                rank.setAddr1(rs.getString(2));
                rank.setReadCount(rs.getInt(3));
                rank.setEventStartDate(rs.getDate(4));
                rank.setEventEndDate(rs.getDate(5));

                rankArrayList.add(rank);
            }

            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }


        return rankArrayList;
    }

}
