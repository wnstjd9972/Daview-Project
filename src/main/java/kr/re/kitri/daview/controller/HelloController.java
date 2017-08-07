package kr.re.kitri.daview.controller;




import kr.re.kitri.daview.model.Item;
import kr.re.kitri.daview.service.DetailBoardService;
import kr.re.kitri.daview.service.MainBoardService;
import kr.re.kitri.daview.service.MainService;
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

    @RequestMapping("/daview")
    public ModelAndView main(){
        return new ModelAndView("main")
                .addObject("item", mainService.getValue());
    }

    @RequestMapping("/daview/all")
    public  String daviewAll(Model model) {
        //model.addAttribute("name", "SpringBlog from Millky");
        return "/season/all";
    }

    @RequestMapping("/daview/spring")
    public  String daviewSpring(Model model) {
        //model.addAttribute("name", "SpringBlog from Millky");
        return "/season/spring";
    }

    @RequestMapping("/daview/summer")
    public  String daviewSummer(Model model) {
        //model.addAttribute("name", "SpringBlog from Millky");
        return "/season/summer";
    }


    @RequestMapping("/daview/fall")
    public  ModelAndView daviewFall() throws Exception {
        List<Item> itemList = mainBoardService.getBoardValue();
        ModelAndView mav = new ModelAndView("/season/fall");
        mav.addObject("itemList",itemList);
        return mav;
    }

    @RequestMapping("/daview/detail/{contentId}")
    public ModelAndView daviewDetail(@PathVariable int contentId) {
        List<Item> itemList = detailBoardService.viewDetail(contentId);
        ModelAndView mav = new ModelAndView("/season/detail");
        mav.addObject("itemList",itemList);
        return mav;
    }

    @RequestMapping("/daview/winter")
    public  String daviewWinter(Model model) {
        //model.addAttribute("name", "SpringBlog from Millky");
        return "/season/winter";
    }
}