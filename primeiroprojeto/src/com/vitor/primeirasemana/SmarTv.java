package com.vitor.primeirasemana;

public class SmarTv {
    boolean on = false;
    int channel = 1;
    int sound = 25;

    public void changeChannel(int newChannel){
        channel = newChannel;
    }

    public void moreChannel(){
        channel++;
    }

    public void lessChannel(){
        channel--;
    }

    public void TvOn(){
        on = true;
    }

    public void TvOff(){
        on = false;
    }

    public void moreSound (){
        sound++;
        System.out.println("sound + " + sound);
    }

    public void lessSound (){
        sound--;
        System.out.println("sound -" + sound);
    }
}
