package kr.re.kitri.daview.service;

import kr.re.kitri.daview.dao.Area5Dao;
import kr.re.kitri.daview.dao.Area6Dao;
import kr.re.kitri.daview.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Area6Service {
    @Autowired
    private Area6Dao area6Dao;
    public List<Item> getBoardArea6() {
        return area6Dao.getArea6();
    }
}
