package kr.re.kitri.daview.controller;

import kr.re.kitri.daview.model.Item;
import kr.re.kitri.daview.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import java.util.List;


@Controller
public class HelloController {
    @Autowired
    private MainService mainService;

    @Autowired
    private MainBoardService mainBoardService;

    @Autowired
    private DetailBoardService detailBoardService;

    @Autowired
    private Area1Service area1Service;

    @Autowired
    private Area2Service area2Service;

    @Autowired
    private Area3Service area3Service;

    @Autowired
    private Area4Service area4Service;

    @Autowired
    private Area5Service area5Service;

    @Autowired
    private Area6Service area6Service;

    @Autowired
    private RankService rankService;

    @RequestMapping("/daview")
    public ModelAndView main(){
        return new ModelAndView("main")
                .addObject("item", mainService.getValue());
    }

    @RequestMapping("/daview/rank")
    public ModelAndView daviewRank()throws Exception {
        List<Item> itemList = rankService.getRankList();
        ModelAndView mav = new ModelAndView("/rank");
        mav.addObject("item",itemList);
        return mav;
    }

    @RequestMapping("/daview/spring")
    public  ModelAndView daviewSpring()throws Exception {
        List<Item> itemList = mainBoardService.getBoardValue();
        ModelAndView mav = new ModelAndView("/season/spring");
        mav.addObject("item",itemList);
        return mav;
    }

    @RequestMapping("/daview/summer")
    public  ModelAndView daviewSummer() throws Exception {
        List<Item> itemList = mainBoardService.getBoardValue();
        ModelAndView mav = new ModelAndView("/season/summer");
        mav.addObject("item",itemList);
        return mav;
    }


    @RequestMapping("/daview/fall")
    public  ModelAndView daviewFall() throws Exception {
        List<Item> itemList = mainBoardService.getBoardValue();
        ModelAndView mav = new ModelAndView("/season/fall");
        mav.addObject("item",itemList);
        return mav;
    }

    @RequestMapping("/daview/winter")
    public  ModelAndView daviewWinter() throws Exception {
        List<Item> itemList = mainBoardService.getBoardValue();
        ModelAndView mav = new ModelAndView("/season/winter");
        mav.addObject("item",itemList);
        return mav;
    }

    @RequestMapping("/daview/area1")
    public  ModelAndView area1() throws Exception {
        List<Item> itemList = area1Service.getBoardArea1();
        ModelAndView mav = new ModelAndView("/area/area1");
        mav.addObject("item",itemList);
        return mav;

    }

    @RequestMapping("/daview/area2")
    public  ModelAndView area2() throws Exception {
        List<Item> itemList = area2Service.getBoardArea2();
        ModelAndView mav = new ModelAndView("/area/area2");
        mav.addObject("item",itemList);
        return mav;
    }

    @RequestMapping("/daview/area3")
    public  ModelAndView area3() throws Exception {
        List<Item> itemList = area3Service.getBoardArea3();
        ModelAndView mav = new ModelAndView("/area/area3");
        mav.addObject("item",itemList);
        return mav;
    }

    @RequestMapping("/daview/area4")
    public  ModelAndView area4() throws Exception {
        List<Item> itemList = area4Service.getBoardArea4();
        ModelAndView mav = new ModelAndView("/area/area4");
        mav.addObject("item",itemList);
        return mav;
    }

    @RequestMapping("/daview/area5")
    public  ModelAndView area5() throws Exception {
        List<Item> itemList = area5Service.getBoardArea5();
        ModelAndView mav = new ModelAndView("/area/area5");
        mav.addObject("item",itemList);
        return mav;
    }

    @RequestMapping("/daview/area6")
    public  ModelAndView area6() throws Exception {
        List<Item> itemList = area6Service.getBoardArea6();
        ModelAndView mav = new ModelAndView("/area/area6");
        mav.addObject("item",itemList);
        return mav;
    }

    @RequestMapping("/daview/detail/{contentId}")
    public ModelAndView daviewDetail(@PathVariable int contentId) {
        List<Item> itemList = detailBoardService.viewDetail(contentId);
        ModelAndView mav = new ModelAndView("/season/detail");
        mav.addObject("item",itemList);
        return mav;
    }



}