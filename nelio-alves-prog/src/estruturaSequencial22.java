import java.util.Scanner;
import java.util.Locale;

public class estruturaSequencial22 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String x;
        int y;
        double z;

        System.out.println("dados digitados: ");
        y = scanner.nextInt(); // o nextInt, nextDouble e outros, ao dar enter no console, ele registra o enter na
        // próxima linha, por isso é preciso criar um scanner vazio para que o enter seja lido.
        x = scanner.nextLine();
        z = scanner.nextDouble();

        System.out.println(y);
        System.out.println(x);
        System.out.println(z);

        scanner.close();

    }
}
