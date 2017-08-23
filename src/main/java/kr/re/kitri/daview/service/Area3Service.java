package kr.re.kitri.daview.service;

import kr.re.kitri.daview.dao.Area3Dao;
import kr.re.kitri.daview.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Area3Service {
    @Autowired
    private Area3Dao area3Dao;
    public List<Item> getBoardArea3() {

        return area3Dao.getArea3();
    }
}

