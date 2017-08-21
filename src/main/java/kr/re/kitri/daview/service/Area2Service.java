package kr.re.kitri.daview.service;

import kr.re.kitri.daview.dao.Area2Dao;
import kr.re.kitri.daview.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Area2Service {
    @Autowired
    private Area2Dao area2Dao;
    public List<Item> getBoardArea2() {
        return area2Dao.getArea2();
    }
}
