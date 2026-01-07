import React, { use } from "react";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";

// Import the modules we built previously
import ChartOfAccounts from "@/components/admin/setup/chart-of-accounts";
import { FinancialYears } from "@/components/admin/setup/financial-years";
import { OpeningBalances } from "@/components/admin/setup/opening-balances";
import { TaxRates } from "@/components/admin/setup/tax-rates";
import { NumberingSeries } from "@/components/admin/setup/numbering-series";
import { AuditLogs } from "@/components/admin/compliance/audit-logs";
import { PeriodLocking } from "@/components/admin/compliance/period-lock";
import { DataApprovalRules } from "@/components/admin/compliance/approval-rules";
import { SystemSettings } from "@/components/admin/settings/general-settings";

const SETTINGS_MAP = {
  accounts: { title: "Chart of Accounts", component: ChartOfAccounts },
  years: { title: "Financial Years", component: FinancialYears },
  balances: { title: "Opening Balances", component: OpeningBalances },
  taxes: { title: "Taxes / VAT / GST", component: TaxRates },
  numbering: { title: "Numbering Series", component: NumberingSeries },
  logs: { title: "Audit Logs", component: AuditLogs },
  locking: { title: "Period Locking", component: PeriodLocking },
  approvals: { title: "Data Approval Rules", component: DataApprovalRules },
  general: { title: "General Settings", component: SystemSettings },
};

export default function SettingsPage({ params }) {
  const data = use(params);
  const config = SETTINGS_MAP[data.slug];

  if (!config) notFound();

  const ActiveComponent = config.component;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{config.title}</h2>
        <p className="text-sm text-muted-foreground">
          Configure system-wide settings for {config.title.toLowerCase()}.
        </p>
      </div>
      <Separator />
      <div className="w-full">
        <ActiveComponent />
      </div>
    </div>
  );
}
