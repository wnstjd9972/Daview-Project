package kr.re.kitri.daview.dao;

import kr.re.kitri.daview.model.Rank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class RankDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private DataSource dataSource;

    public List<Rank> selectTopTenFestival() {
        String query = "SELECT title, st_date, end_date, address, popularity FROM festival LIMIT 10";

        return jdbcTemplate.query(query, new BeanPropertyRowMapper<Rank>(Rank.class));


        /*try {
            Connection conn = dataSource.getConnection();

            PreparedStatement pstmt = conn.prepareStatement(query);
            ResultSet rs = pstmt.executeQuery();

            List<Rank> list = new ArrayList<>();

            Rank rank;
            while (rs.next()){
                rank = new Rank();

                rank.setTitle(rs.getString("1"));
                rank.setAddr1(rs.getString("2"));
                rank.setReadCount(rs.getInt("3"));
                rank.setEventStartDate(rs.getInt("4"));
                rank.setEventEndDate(rs.getInt("5"));

                list.add(rank);
            }

            conn.close();

            return list;
        } catch (SQLException e) {
            e.printStackTrace();
            return new ArrayList<>();
        }*/
    }

}