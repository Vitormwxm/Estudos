package com.vitor.primeirasemana;
public class Usuario {
      public static void main(String[] args) {
        SmarTv smarTv = new SmarTv();

        smarTv.changeChannel(13);

        System.out.println(("your channel is " + smarTv.channel));
        smarTv.moreSound();
        smarTv.moreSound();
    }
}

       
