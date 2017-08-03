package kr.re.kitri.daview.controller;




import com.sun.org.apache.xpath.internal.operations.Mod;
import kr.re.kitri.daview.model.Item;
import kr.re.kitri.daview.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.http.HttpEncodingProperties;
import org.springframework.boot.web.servlet.filter.OrderedCharacterEncodingFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.List;


@Controller
public class HelloController {
    @Autowired
    private MainService mainService;

    @RequestMapping("/daview")
    public ModelAndView main(Item item){
        List<Item> list = mainService.getValue(item);
        return new ModelAndView("main")
                .addObject("item",list);
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
        List<Item> itemList = mainService.getValue();
        ModelAndView mav = new ModelAndView("/season/fall");
        mav.addObject("itemList",itemList);
        return mav;
        //model.addAttribute("name", "SpringBlog from Millky");
        //return "/season/fall";
    }

    @RequestMapping("/daview/winter")
    public  String daviewWinter(Model model) {
        //model.addAttribute("name", "SpringBlog from Millky");
        return "/season/winter";
    }

    @RequestMapping(value = "/daview/detail/{item}")
    public String detailView(@PathVariable String item) {
        System.out.println(item + "........................................");
        return "/season/detail";
    }


    @RequestMapping("/test")
    public void restClient() throws Exception {
        /*String addr = "http://api.visitkorea.or.kr/openapi/service?";
        String serviceKey =
                "=mTy6RIO%2FUanpU8PccBrEB%2BJgzQk5jV%2BbKB2ezfRspybCOoVYDMXegKeGvrzhtwJz44WCumfb%2BbXcBDPf28nLtQ%3D%3D";
        String parameter = "";

        parameter = parameter + "&" + "MobileOS=ETC";
        parameter = parameter + "&" + "MobileApp=Apptesting";
        parameter = parameter + "&" + "keyword=축제";
        parameter = parameter + "&" + "areaCode=1&arrange=C&listYN=Y&pageNo=1&numOfRows=100";


        addr = addr + serviceKey + parameter;
        URL url = new URL(addr);
        BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream(), "utf-8"));
        String inLine;
        String xml = "";
        while ((inLine = in.readLine()) != null) xml = inLine;
        in.close();

        return xml;*/

        String strUrl = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?ServiceKey=";
        strUrl = strUrl + "mTy6RIO%2FUanpU8PccBrEB%2BJgzQk5jV%2BbKB2ezfRspybCOoVYDMXegKeGvrzhtwJz44WCumfb%2BbXcBDPf28nLtQ%3D%3D";

        String serviceKey = "";

        String parameter = "";

        StringBuilder urlBuilder = new StringBuilder("http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon"); /*URL*/

        urlBuilder.append("?" + URLEncoder.encode("ServiceKey","UTF-8") + "=서비스키"); /*Service Key*/
        urlBuilder.append("&" + URLEncoder.encode("파라미터영문명","UTF-8") +
                "=" + URLEncoder.encode("파라미터기본값", "UTF-8")); /*파라미터설명*/

        URL url = new URL(urlBuilder.toString());

        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;

        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }

        StringBuilder sb = new StringBuilder();
        String line;

        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }

        rd.close();
        conn.disconnect();
//        System.out.println(sb.toString());
    }




}