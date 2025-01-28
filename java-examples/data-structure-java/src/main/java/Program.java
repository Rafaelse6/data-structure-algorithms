public class Program {

    public  static void main(String [] args){
        var p1 = new Product("Laptop", 1000.0, 5);
        var p2 = new Product("Headphones", 200.0, 2);

        p1.setName("Novo nome");

        System.out.println(p1.getPrice());
        System.out.println(p1.getName());

    }
}
