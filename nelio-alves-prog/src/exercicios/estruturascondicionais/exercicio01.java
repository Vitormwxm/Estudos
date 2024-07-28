package exercicios.estruturascondicionais;

import java.util.Scanner;

public class exercicio01 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("digite um numero: ");
        int numero = sc.nextInt();

        if (numero > 0){
            System.out.println("NÃO NEGATIVO");
        } else if (numero == 0){
            System.out.println("NÃO EXISTE");
        } else {
            System.out.println("NEGATIVO");
        }
        sc.close();
    }
}
