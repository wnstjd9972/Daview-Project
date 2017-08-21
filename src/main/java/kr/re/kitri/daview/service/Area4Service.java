package kr.re.kitri.daview.service;

import kr.re.kitri.daview.dao.Area4Dao;
import kr.re.kitri.daview.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Area4Service {
    @Autowired
    private Area4Dao area4Dao;
    public List<Item> getBoardArea4() {

        return area4Dao.getArea4();
    }
}
