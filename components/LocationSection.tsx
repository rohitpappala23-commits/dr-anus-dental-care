import { MapPin, Navigation, Clock, Phone, MessageCircle, Bus, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS, MAPS_URL, DOCTOR } from "@/lib/constants";

/** Full address, timings, landmark directions, and Google Maps embed. */
export function LocationSection() {
  const mapQuery = encodeURIComponent(
    `${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality}, Visakhapatnam, ${BUSINESS.address.addressRegion} ${BUSINESS.address.postalCode}`,
  );

  const primaryPhone = BUSINESS.telephone[0];
  const primaryPhoneHref = `tel:${primaryPhone.replace(/\s+/g, "")}`;

  return (
    <section
      className="py-20 lg:py-28 bg-[#970747]/[0.02]"
      aria-labelledby="location-section-heading"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* ── Section header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f8d0df] bg-[#fdf2f6] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#970747]">
            <MapPin className="size-3" aria-hidden />
            Visit Our Clinic
          </span>

          <h2
            id="location-section-heading"
            className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Find Us in PM Palem, Visakhapatnam
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Conveniently located near the PM Palem last bus stop — walk in,
            call ahead, or tap to get turn-by-turn directions.
          </p>
        </div>

        {/* ── 2-column layout ── */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">

          {/* ── Left: address + timings + directions ── */}
          <div className="flex flex-col gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
            {/* Full address block */}
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#f8d0df] bg-[#fdf2f6] text-[#970747]">
                <MapPin className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Clinic Address
                </h3>
                <address className="mt-1.5 text-sm not-italic leading-relaxed text-slate-600">
                  <strong className="text-slate-800">{BUSINESS.name}</strong>
                  <br />
                  Surya Medicare, Bobby NKM Apartment
                  <br />
                  Near Last Bus Stop, PM Palem
                  <br />
                  Visakhapatnam, Andhra Pradesh —{" "}
                  {BUSINESS.address.postalCode}
                </address>
              </div>
            </div>

            {/* Hairline divider */}
            <div className="h-px w-full bg-slate-200" aria-hidden />

            {/* Operating hours table */}
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#f8d0df] bg-[#fdf2f6] text-[#970747]">
                <Clock className="size-5" aria-hidden />
              </span>
              <div className="w-full">
                <h3 className="text-base font-bold text-slate-900">
                  Clinic Timings
                </h3>
                <table className="mt-3 w-full text-sm">
                  <tbody>
                    {BUSINESS.hoursDisplay.map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-slate-200 last:border-0"
                      >
                        <th
                          scope="row"
                          className="py-2.5 text-left font-semibold text-slate-800"
                        >
                          {row.label}
                        </th>
                        <td className="py-2.5 text-right font-semibold text-[#970747]">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-2 text-xs font-medium text-slate-500">
                  Walk-ins welcome · Evening slots available (Mon–Sat)
                </p>
              </div>
            </div>

            {/* Hairline divider */}
            <div className="h-px w-full bg-slate-200" aria-hidden />

            {/* Landmark directions */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                <Navigation className="size-4 shrink-0 text-[#970747]" aria-hidden />
                How to Find Us
              </h3>
              <ul className="mt-3 space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#fdf2f6] text-[#970747]">
                    <Bus className="size-3.5" aria-hidden />
                  </span>
                  <span>
                    <strong className="text-slate-800">By Bus:</strong> Alight
                    at the PM Palem Last Bus Stop. The clinic is right{" "}
                    <em>at</em> the stop inside the Bobby NKM Apartment complex.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#fdf2f6] text-[#970747]">
                    <Building2 className="size-3.5" aria-hidden />
                  </span>
                  <span>
                    <strong className="text-slate-800">By Car / Auto:</strong>{" "}
                    Look for the{" "}
                    <em>Surya Medicare</em> signboard on the main road. Free
                    parking is available near the complex.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#fdf2f6] text-[#970747]">
                    <Phone className="size-3.5" aria-hidden />
                  </span>
                  <span>
                    <strong className="text-slate-800">Not sure?</strong> Call{" "}
                    <a
                      href={primaryPhoneHref}
                      className="font-semibold text-[#970747] underline underline-offset-2 transition-colors hover:text-[#83063d]"
                    >
                      {primaryPhone}
                    </a>{" "}
                    and we&apos;ll guide you.
                  </span>
                </li>
              </ul>
            </div>

            {/* Lead doctor attribution */}
            <div className="rounded-xl border border-[#f8d0df] bg-[#fdf2f6] px-4 py-3 text-xs text-[#970747]">
              Consultations led by{" "}
              <strong className="font-semibold">{DOCTOR.displayName}</strong> —{" "}
              {DOCTOR.credentials}, Reg. No: {DOCTOR.registrationNumber}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Button href={MAPS_URL} variant="primary" className="flex-1 sm:flex-none">
                <Navigation className="size-4" aria-hidden />
                Get Directions
              </Button>
              <Button
                href={BUSINESS.whatsappUrl}
                variant="secondary"
                className="flex-1 sm:flex-none"
              >
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* ── Right: embedded Google Maps iframe ── */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md min-h-[400px]">
            <iframe
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              title={`Map showing the location of ${BUSINESS.name} at Surya Medicare, Bobby NKM Apartment, near the Last Bus Stop, PM Palem, Visakhapatnam`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              style={{ border: 0 }}
              className="h-full min-h-[400px] w-full lg:min-h-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
