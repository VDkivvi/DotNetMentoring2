
namespace MultiTHreadLinkenIn
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Thread thread = new Thread(WriteUsingNewThread);
            thread.Name = "SOME PARALLEL";
            Thread.CurrentThread.Name = "main THREAD";
            //worker thread
            thread.Start();
            //Main thread
            for (int i = 0; i < 1000; i++)
            {
                Console.Write($"mi: {i},");
            }
            Console.WriteLine("Hello, World!");
        }

        private static void WriteUsingNewThread(object? obj)
        {
            for (int i = 0; i<1000; i++)
            {
                Console.Write($"i: {i},");
            }
        }
    }
}
