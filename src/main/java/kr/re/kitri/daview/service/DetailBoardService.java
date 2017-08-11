package kr.re.kitri.daview.service;

import kr.re.kitri.daview.dao.DetailBoardDao;
import kr.re.kitri.daview.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetailBoardService {
    @Autowired
    private DetailBoardDao detailBoardDao;
    public List<Item> viewDetail(int contentId) {
        return detailBoardDao.selectItemByContentId(contentId);
    }
}
