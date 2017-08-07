package kr.re.kitri.daview.dao;

import kr.re.kitri.daview.InsertService;
import kr.re.kitri.daview.model.Rank;
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
    //RankService rankService;
    InsertService insertService;

    public List<Rank> getRankFestival() {
        String query = "SELECT title, addr1, readCount, eventStartDate, eventEndDate FROM festival " +
                "ORDER BY readCount DESC LIMIT 10";

        //return jdbcTemplate.query(query, new BeanPropertyRowMapper<Rank>(Rank.class));

        //Connection conn = dataSource.getConnection();
        Connection conn  = insertService.getConnection();

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
                rank.setEventStartDate(rs.getInt(4));
                rank.setEventEndDate(rs.getInt(5));

                rankArrayList.add(rank);
            }

            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rankArrayList;
    }

}
