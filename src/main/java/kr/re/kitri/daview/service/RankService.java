package kr.re.kitri.daview.service;


import kr.re.kitri.daview.dao.RankDao;
import kr.re.kitri.daview.model.Rank;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RankService {

    private RankDao dao;

    public List<Rank> viewRankFestival() {
        return dao.selectTopTenFestival();
    }
}