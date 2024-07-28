package exercicios.estruturascondicionais;

import java.util.Scanner;

public class exercicio04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("ALGORITMO DURAÇÃO DE UM EVENTO");
        System.out.println("que horas iniciou o EVENTO? ");
        int inicioJogo = scanner.nextInt();
        System.out.println("que horas o EVENTO foi finalizado? ");
        int finalJogo = scanner.nextInt();

        if ( inicioJogo < finalJogo){
            int duracaoJogo = inicioJogo - finalJogo;
            System.out.println("Os PEGAS DUROU " + duracaoJogo + " HORAS");
        } else {
            int duracaoJogo = 24 - inicioJogo + finalJogo;
            System.out.println("O PEGAS DUROU " + duracaoJogo + " Horas");
        }
        scanner.close();
    }
}
