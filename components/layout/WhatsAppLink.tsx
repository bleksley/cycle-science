import { getSite, getWhatsAppUrl } from "@/lib/content";
import { cn } from "@/lib/utils";

export function WhatsAppLink({
  className,
  children,
  message,
}: {
  className?: string;
  children: React.ReactNode;
  message?: string;
}) {
  const { contact } = getSite();
  const href = getWhatsAppUrl(contact.whatsappNumber, message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("hover:text-sunset transition-colors", className)}
    >
      {children}
    </a>
  );
}
