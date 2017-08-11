package kr.re.kitri.daview.service;


import kr.re.kitri.daview.InsertData;
import kr.re.kitri.daview.dao.RankDao;
import kr.re.kitri.daview.model.Rank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

@Service
public class RankService {

    @Autowired
    private RankDao rankDao;

    public List<Rank> getRank() {
        return rankDao.getRankFestival();
    }


    public Connection getConnection() {
        Connection conn = null;
        /*try {
            Class.forName(InsertData.DRIVER_MYSQL).newInstance();
            System.out.println("driver loading ok..");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        }*/

        try {
            conn = DriverManager.getConnection
                    (InsertData.DB_URL, InsertData.USERNAME, InsertData.PASSWORD);
            System.out.println("FestivalDB Connection ok..");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }
}