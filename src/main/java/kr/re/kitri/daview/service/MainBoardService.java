package kr.re.kitri.daview.service;

import kr.re.kitri.daview.dao.MainBoardDao;
import kr.re.kitri.daview.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainBoardService{
    @Autowired
    private MainBoardDao mainBoardDao;
    public List<Item> getBoardValue() {
        return mainBoardDao.getBoard();
        }
}
