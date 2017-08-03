package kr.re.kitri.daview.service;

import kr.re.kitri.daview.dao.MainDao;
import kr.re.kitri.daview.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainService {

    @Autowired
    private MainDao mainDao;
    public List<Item> getValue() {
      return mainDao.getXY();

    }
}
