package kr.re.kitri.daview.model;


public class Rank {
    private String title;
    private String addr1;
    private int readCount;
    private int eventStartDate;
    private int eventEndDate;

    @Override
    public String toString() {
        return "Rank{" +
                "title='" + title + '\'' +
                ", addr1='" + addr1 + '\'' +
                ", readCount=" + readCount +
                ", eventStartDate=" + eventStartDate +
                ", eventEndDate=" + eventEndDate +
                '}';
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

    public Rank() {

    }

    public Rank(String title, String addr1, int readCount, int eventStartDate, int eventEndDate) {

        this.title = title;
        this.addr1 = addr1;
        this.readCount = readCount;
        this.eventStartDate = eventStartDate;
        this.eventEndDate = eventEndDate;
    }
}
