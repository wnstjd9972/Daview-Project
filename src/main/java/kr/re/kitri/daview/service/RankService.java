package kr.re.kitri.daview.service;


import kr.re.kitri.daview.dao.RankDao;
import kr.re.kitri.daview.model.Rank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RankService {

    @Autowired
    private RankDao rankDao;

    public List<Rank> getRank() {
        return rankDao.getRankFestival();
    }
}