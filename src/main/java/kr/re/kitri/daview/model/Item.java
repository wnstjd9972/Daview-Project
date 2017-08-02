package kr.re.kitri.daview.model;

public class Item {
    private int areaCode;
    private String addr1;
    private int contentId;
    private int eventStartDate;
    private int eventEndDate;
    private Object firstImage;
    private double mapX;
    private double mapY;
    private int readCount;
    private String tel;
    private String title;

    public Item() {

    }

    @Override
    public String toString() {
        return "Item{" +
                "areaCode=" + areaCode +
                ", addr1='" + addr1 + '\'' +
                ", contentId=" + contentId +
                ", eventStartDate='" + eventStartDate + '\'' +
                ", eventEndDate='" + eventEndDate + '\'' +
                ", firstImage='" + firstImage + '\'' +
                ", mapX=" + mapX +
                ", mapY=" + mapY +
                ", readCount=" + readCount +
                ", tel='" + tel + '\'' +
                ", title='" + title + '\'' +
                '}';
    }

    public Item(int areaCode, String addr1, int contentId, int eventStartDate, int eventEndDate,
                String firstImage, float mapX, float mapY, int readCount, String tel, String title) {
        this.areaCode = areaCode;
        this.addr1 = addr1;
        this.contentId = contentId;
        this.eventStartDate = eventStartDate;
        this.eventEndDate = eventEndDate;
        this.firstImage = firstImage;
        this.mapX = mapX;
        this.mapY = mapY;
        this.readCount = readCount;
        this.tel = tel;
        this.title = title;
    }

    public int getAreaCode() {
        return areaCode;
    }

    public void setAreaCode(int areaCode) {
        this.areaCode = areaCode;
    }

    public String getAddr1() {
        return addr1;
    }

    public void setAddr1(String addr1) {
        this.addr1 = addr1;
    }

    public int getContentId() {
        return contentId;
    }

    public void setContentId(int contentId) {
        this.contentId = contentId;
    }

    public int getEventStartDate() {
        return eventStartDate;
    }

    public void setEventStartDate(int eventStartDate) {
        this.eventStartDate = eventStartDate;
    }

    public int getEventEndDate() {
        return eventEndDate;
    }

    public void setEventEndDate(int eventEndDate) {
        this.eventEndDate = eventEndDate;
    }

    public Object getFirstImage() {
        return firstImage;
    }

    public void setFirstImage(Object firstImage) {
        this.firstImage = firstImage;
    }

    public double getMapX() {
        return mapX;
    }

    public void setMapX(double mapX) {
        this.mapX = mapX;
    }

    public double getMapY() {
        return mapY;
    }

    public void setMapY(double mapY) {
        this.mapY = mapY;
    }

    public int getReadCount() {
        return readCount;
    }

    public void setReadCount(int readCount) {
        this.readCount = readCount;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
