package estruturacondicional;

public class operadoresLogicos {
    public static void main(String[] args) {

        Boolean aprovadoPsicotecnico, aprovadoLegislacao, aprovadoDirecao;
        aprovadoPsicotecnico = true;
        aprovadoLegislacao = true;
        aprovadoDirecao = false;

        if (aprovadoDirecao && aprovadoLegislacao && aprovadoPsicotecnico){
            System.out.println("parabéns , pode tirar a habilitação");
        } else {
            System.out.println("você não está apto");
        }

    }
}
