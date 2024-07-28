package exercicios;

import java.util.Locale;
import java.util.Scanner;

public class exercicio02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double area,pi,raio;
        Locale.setDefault(Locale.US);
        pi = 3.14159;
        System.out.println("digite o valor do raio: ");
        raio = Math.pow(Double.parseDouble(sc.nextLine()) , 2);
        area = pi * raio;

        System.out.println("a AREA do Circulo é " + area);
        sc.close();
    }
}
