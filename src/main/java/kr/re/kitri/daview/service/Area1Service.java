package kr.re.kitri.daview.service;

import kr.re.kitri.daview.dao.Area1Dao;
import kr.re.kitri.daview.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Area1Service {
    @Autowired
    private Area1Dao area1Dao;
    public List<Item> getBoardArea1() {

        return area1Dao.getArea1();
    }
}
