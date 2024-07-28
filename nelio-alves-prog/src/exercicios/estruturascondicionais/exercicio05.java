package exercicios.estruturascondicionais;

import java.util.Scanner;

public class exercicio05 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println(" códigos e produtos \r\ncachorro quente = 1 \nx-salada = 2\nx-bacon = 3\ntorrada-simples = 4\nrefrigerante = 5");
        System.out.println("digite um código");
        int codigo = scanner.nextInt();
        System.out.println("digite a quantidade desse produto");
        int quantidade = scanner.nextInt();

        if (codigo == 1){
            double conta = quantidade * 4;
            System.out.println("o item comprado é um cachorro quente, e o total da compra é " + conta);
        } else if (codigo == 2) {
            double conta = quantidade * 4.50;
            System.out.println("o item comprado é um x-salada, o total da compra é " + conta);
        } else if (codigo == 3) {
            double conta = quantidade * 5;
            System.out.println("o item comprado é um x-Bacon, o total da compra é " + conta);
        } else if (codigo == 4) {
            double conta = quantidade * 2;
            System.out.println("o item comprado é um torrada simples, o total da compra é " + conta);
        } else {
            double conta = quantidade * 1.50;
            System.out.println("o item comprado é um refrigerante, o total da compra é " + conta);
        }
    }
}
