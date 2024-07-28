import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("digite um numero: ");
        double a = sc.nextDouble();
        System.out.println("digite outro numero: ");
        double b = sc.nextDouble();
        double soma = a + b;

        System.out.println("SOMA = " + soma);
    }
    }
