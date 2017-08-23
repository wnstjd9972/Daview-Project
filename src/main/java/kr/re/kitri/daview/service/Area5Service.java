package kr.re.kitri.daview.service;

import kr.re.kitri.daview.dao.Area5Dao;
import kr.re.kitri.daview.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Area5Service {
    @Autowired
    private Area5Dao area5Dao;
    public List<Item> getBoardArea5() {
        return area5Dao.getArea5();
    }
}
