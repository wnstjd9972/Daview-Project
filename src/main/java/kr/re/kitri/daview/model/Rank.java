package kr.re.kitri.daview.model;


import java.sql.Date;

public class Rank {
    private String title;
    private String addr1;
    private int readCount;
    private Date eventStartDate;
    private Date eventEndDate;

    public Rank() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAddr1() {
        return addr1;
    }

    public void setAddr1(String addr1) {
        this.addr1 = addr1;
    }

    public int getReadCount() {
        return readCount;
    }

    public void setReadCount(int readCount) {
        this.readCount = readCount;
    }

    public Date getEventStartDate() {
        return eventStartDate;
    }

    public void setEventStartDate(Date eventStartDate) {
        this.eventStartDate = eventStartDate;
    }

    public Date getEventEndDate() {
        return eventEndDate;
    }

    public void setEventEndDate(Date eventEndDate) {
        this.eventEndDate = eventEndDate;
    }

    public Rank(String title, String addr1, int readCount, Date eventStartDate, Date eventEndDate) {
        this.title = title;
        this.addr1 = addr1;
        this.readCount = readCount;
        this.eventStartDate = eventStartDate;
        this.eventEndDate = eventEndDate;
    }
}
