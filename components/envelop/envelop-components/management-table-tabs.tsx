import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Image from "next/image";

type Props = {
  components: any[];
};

export default function ManagementTableTabs({ components }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-12">
      <Card className="col-span-12 md:col-span-8 lg:col-span-8">

        <Tabs defaultValue="table" className="">
          <TabsList className="m-[20px]">
            <TabsTrigger value="table">Table</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
          </TabsList>

          <TabsContent value="table" className="">
            <CardContent className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {components.map((component) => (
                <Card key={component.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-[15px] font-bold text-[#f4c95d]">
                      {component.title}
                    </CardTitle>
                    {/* <Badge variant="outline" className="bg-[#de4e4e] text-[white]"> Reserve </Badge> */}
                    <Badge
                      variant="outline"
                      className={
                        component.status == "wanited"
                          ? "bg-[#72c88c] text-[white]"
                          : "bg-[#e84e4e] text-[white]"
                      }
                    >
                      {component.status}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className=" mt-[10px] mb-[10px] flex gap-1 flex-row items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span className="">: 99+</span>
                    </div>

                    <div className=" mt-[10px] mb-[10px] flex gap-1 flex-row items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      <span className="">
                        : {component.told_price.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex flex-row items-center justify-between space-y-0 ">
                      <Button className="w-[80px] h-[25px]">book</Button>

                      <Button className="w-[80px] h-[25px]">pay</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </TabsContent>

          <TabsContent value="menu" className="h-[500px] overflow-auto">
            <CardContent className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {components.map((component) => (
                <Card key={component.title} className="overflow-auto">
                  <CardContent className="flex flex-row gap-3 items-center justify-between space-y-1  ml-[5px]">
                    <Image
                      className="rounded-[15px] mt-[10px]"
                      alt="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/downtown.jpg"
                      width={150}
                      height={150}
                      src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/downtown.jpg"
                    />
                    <CardDescription>
                      <h1 className="text-[15px] font-bold">Cheesy Pasta</h1>
                      <h3 className="line-clamp-3">
                        Special Downtown Pasta, When you're craving cheese and
                        carbs, there's really nothing ...Read less
                      </h3>
                      <h4 className="text-black">100000xp</h4>
                    </CardDescription>

                    <div>
                      <Badge
                        variant="outline"
                        className={
                          component.status == "wanited"
                            ? "bg-[#72c88c] text-[white]"
                            : "bg-[#e84e4e] text-[white]"
                        }
                      >
                        {component.status}
                      </Badge>
                      <Button className="w-[80px] h-[25px]">book</Button>
                      <Button className="w-[80px] h-[25px]">pay</Button>
                      <Button className="w-[80px] h-[25px]">book</Button>       
                    </div>

                    
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </TabsContent>
        </Tabs>

      </Card>

      <Card className="col-span-12 lg:col-span-4 md:col-span-8">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>You made 265 sales this month.</CardDescription>
        </CardHeader>
        <CardContent>{/* <RecentSales /> */}</CardContent>
      </Card>
    </div>
  );
}
