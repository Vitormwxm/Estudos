package exercicios;

import java.util.Scanner;

public class exercicio03 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a,b,c,d,diferenca;
        System.out.println("digite 4 numeros: ");
        a = sc.nextInt();
        b = sc.nextInt();
        c = sc.nextInt();
        d = sc.nextInt();

        diferenca = (a*b - c*d);

        System.out.println(diferenca);

    }
}
