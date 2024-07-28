import java.util.Scanner;

public class calcuraArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("programa que calcula a área do Trapézio " );
        System.out.println("digite a base menor " );
        double baseMenor = scanner.nextDouble();
        System.out.println("digite a base maior " );
        double baseMaior = scanner.nextDouble();
        System.out.println("digite a base altura " );
        double altura = scanner.nextDouble();

        double areaTrapezio = (baseMenor + baseMaior) / 2 * altura;

        System.out.printf("essa é a área do Trapézio %.2f%n  ", areaTrapezio);
    }
}
