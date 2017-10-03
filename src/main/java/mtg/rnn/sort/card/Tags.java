package mtg.rnn.sort.card;

public class Tags {

    private boolean atrocious;

    private boolean broken;

    private boolean funny;

    private boolean novel;

    private boolean overpowered;

    private boolean plagiarized;

    private boolean unlikely;

    private boolean youTried;

    public boolean isAtrocious() {
        return atrocious;
    }

    public void setAtrocious(boolean atrocious) {
        this.atrocious = atrocious;
    }

    public boolean isBroken() {
        return broken;
    }

    public void setBroken(boolean broken) {
        this.broken = broken;
    }

    public boolean isFunny() {
        return funny;
    }

    public void setFunny(boolean funny) {
        this.funny = funny;
    }

    public boolean isNovel() {
        return novel;
    }

    public void setNovel(boolean novel) {
        this.novel = novel;
    }

    public boolean isOverpowered() {
        return overpowered;
    }

    public void setOverpowered(boolean overpowered) {
        this.overpowered = overpowered;
    }

    public boolean isPlagiarized() {
        return plagiarized;
    }

    public void setPlagiarized(boolean plagiarized) {
        this.plagiarized = plagiarized;
    }

    public boolean isUnlikely() {
        return unlikely;
    }

    public void setUnlikely(boolean unlikely) {
        this.unlikely = unlikely;
    }

    public boolean isYouTried() {
        return youTried;
    }

    public void setYouTried(boolean youTried) {
        this.youTried = youTried;
    }

    @Override
    public String toString() {
        return "Tags{" +
                "atrocious=" + atrocious +
                ", broken=" + broken +
                ", funny=" + funny +
                ", novel=" + novel +
                ", overpowered=" + overpowered +
                ", plagiarized=" + plagiarized +
                ", unlikely=" + unlikely +
                ", youTried=" + youTried +
                '}';
    }
}
