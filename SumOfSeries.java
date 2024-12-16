import java.util.Scanner;

public class SumOfSeries {

    // Function to calculate factorial of a number
    public static double factorial(int num) {
        double fact = 1;
        for (int i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }

    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input N
        System.out.print("Enter the value of N: ");
        int N = scanner.nextInt();

        double sum = 0.0;

        // Calculate the sum of the series
        for (int i = 1; i <= N; i++) {
            sum += (double) i / factorial(i);
        }

        // Print the result
        System.out.printf("The sum of the series is: %.6f\n", sum);

        scanner.close();
    }
}
