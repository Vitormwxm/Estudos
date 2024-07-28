package exercicios.estruturascondicionais;

import java.util.Scanner;

public class exercicio03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("digite um numero");
        int numero = scanner.nextInt();
        System.out.println("digite outro numero: ");
        int numeroDivisor = scanner.nextInt();

        if (numero % numeroDivisor == 0 || numeroDivisor % numero == 0 ){
            System.out.println("são multiplos ");
        } else {
            System.out.println("não são multiplos");
        }
    }
}
