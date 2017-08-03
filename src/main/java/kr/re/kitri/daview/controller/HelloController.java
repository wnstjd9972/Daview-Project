package kr.re.kitri.daview.controller;

import kr.re.kitri.daview.model.Rank;
import kr.re.kitri.daview.service.MainService;
import kr.re.kitri.daview.service.RankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;


@Controller
public class HelloController {
    @Autowired
    private MainService mainService;
    @Autowired
    private RankService rankService;

    @RequestMapping("/daview")
    public ModelAndView main(){
        return new ModelAndView("main")
                .addObject("item", mainService.getValue());
    }

    @RequestMapping("/daview/rank")
    public ModelAndView daviewRank(){
        List<Rank> rankList = rankService.getRank();
        ModelAndView mav = new ModelAndView("rank");
        mav.addObject("rankList",rankList);

        return mav;
        /*return new ModelAndView("rank")
                .addObject("rank", rankService.getRank());*/
    }

    @RequestMapping("/daview/all")
    public  String daviewAll(Model model) {
        //model.addAttribute("name", "SpringBlog from Millky");
        return "/season/all";
    }

    @RequestMapping("/daview/spring")
    public  String daviewSpring(Model model) {
        return "/season/spring";
    }

    @RequestMapping("/daview/summer")
    public  String daviewSummer(Model model) {
        return "/season/summer";
    }

    @RequestMapping("/daview/fall")
    public  String daviewFall(Model model) {
        return "/season/fall";
    }

    @RequestMapping("/daview/winter")
    public  String daviewWinter(Model model) {
        return "/season/winter";
    }

}