package exercicios.estruturascondicionais;

import java.util.Scanner;

public class exercicio06 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("digite um numero: ");
        int numero = scanner.nextInt();

        if (numero >= 25 && numero <= 50){
            System.out.println("intervalo entre 25 e 50");
        } else if (numero >= 75 && numero <= 100) {
            System.out.println("intervalo entre 75 e 100");
        } else {
            System.out.println("fora do intervalo");
        }
    }
}
