import java.util.Scanner;

public class ejercJSjava {
    public static void main(String[] args) {

        Scanner s = new Scanner(System.in);
        System.out.println("Ingresar salario: ");
        double salarioI = s.nextDouble();
        int year = 0;
        double[] salarioR = new double[6];
        for (int i = 0; i < salarioR.length; i++){
            year = i;
            salarioR[i] = (salarioI + (salarioI * 0.10) * i);
            System.out.println(salarioR[i] + " year: " + (year + 1));
        }
    }
}