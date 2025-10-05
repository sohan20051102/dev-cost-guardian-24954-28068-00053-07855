import { Card } from "@/components/ui/card";
import { Check, X, AlertCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonData = [
  {
    feature: "No YAML Config",
    devyntra: true,
    jenkins: false,
    github: false,
    harness: false
  },
  {
    feature: "AI Auto Fix",
    devyntra: true,
    jenkins: false,
    github: false,
    harness: "partial"
  },
  {
    feature: "Billing Integration",
    devyntra: true,
    jenkins: false,
    github: false,
    harness: false
  },
  {
    feature: "One-Click Deploy",
    devyntra: true,
    jenkins: false,
    github: "partial",
    harness: "partial"
  }
];

const StatusIcon = ({ status }: { status: boolean | string }) => {
  if (status === true) {
    return <Check className="w-5 h-5 text-green-500" />;
  } else if (status === "partial") {
    return <AlertCircle className="w-5 h-5 text-yellow-500" />;
  }
  return <X className="w-5 h-5 text-destructive" />;
};

export const Differentiation = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why <span className="bg-gradient-primary bg-clip-text text-transparent">Devyntra</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            All the power. None of the pain.
          </p>
          <p className="text-base text-muted-foreground">
            See how we stack up against other DevOps tools
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold text-foreground">Feature</TableHead>
                  <TableHead className="text-center font-semibold text-primary">Devyntra</TableHead>
                  <TableHead className="text-center font-semibold">Jenkins</TableHead>
                  <TableHead className="text-center font-semibold">GitHub Actions</TableHead>
                  <TableHead className="text-center font-semibold">Harness</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={row.devyntra} />
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={row.jenkins} />
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={row.github} />
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={row.harness} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-lg md:text-xl font-semibold text-muted-foreground">
            <span className="text-primary">⚠️</span> Partial support | <span className="text-green-500">✓</span> Full support | <span className="text-destructive">✗</span> Not available
          </p>
        </div>
      </div>
    </section>
  );
};
