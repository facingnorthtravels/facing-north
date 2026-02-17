import React from "react";
import classes from "./faqContent.module.css";
import Faq from "react-faq-component";

function FaqContent() {
  const AnswerSection = ({ content }) => {
    return (
      <>
        <div className={classes.answer_section}>
          <div className={classes.para_section}>
            <p>{content}</p>
          </div>
        </div>
      </>
    );
  };

  const data = {
    rows: [
      {
        title: `Can I get a private tour organized?`,
        content: (
          <AnswerSection
            content={`You can design your own trip to suit your needs whether you're traveling with a group of like-minded people, friends, family, or even by yourself. 
              Just enter a few basic information in our form for a personalized tour, and we'll take care of the rest!`}
          />
        ),
      },
      {
        title: `How can I confirm my booking?`,
        content: (
          <AnswerSection
            content={`For booked excursions, we require a 50% deposit to secure the reservation and the remaining balance must be paid in full one month prior to the start of the tour. 
              Unless otherwise specified, 100% of the total cost must be paid to confirm reservations for customized tours. 
              Please review our Booking / Cancellation policy for more information. For more help, contact us at info@facingnorth.pk or via phone at +92-311-5596785.`}
          />
        ),
      },
      {
        title: `What happens if I have to cancel my booking?`,
        content: (
          <AnswerSection
            content={`Unless otherwise specified, the following cancellation fees will be applied to the tour advance payment. 
              Two months or more before departure: 10% off for administrative expenses 50% discount is applied 1 to 2 months before departure. 
              75% reduction for bookings made with less than one month to travel. 
              15% or less before departure: 100% deduction Please review our Booking / Cancellation policy for more information. 
              For more help, contact us at info@facingnorth.pk or via phone at +92-311-5596785.`}
          />
        ),
      },
      {
        title: `What does the tour cost cover?`,
        content: (
          <AnswerSection
            content={`The following services are typically included or not included in public group tours.

              - Included: 
              
              Tickets for domestic flights (if applicable)
              a vehicle driven by an experienced driver Private jeeps and vans within Pakistan Accommodations during the tour (shared lodging at homestays or double occupancy at hotels)
              For an additional fee, lodging around tour dates can be arranged.
              Meals (Breakfast, lunch, and dinner)
              escorted tours
              Cultural pursuits
              Admission tickets
              Taxes and tolls
              Letter of Invitation (LOI) for Visa
              Basic First Aid
              Domestic airport shuttles in Pakistan
              
              - Not Including:

              Ticket for a global flight
              a visa charge
              Porters to transport personal items
              individual hiking gear
              Advice for workers/guides (optional)
              Traveling and hiking snacks
              Additional meals and laundry services used in hotels or elsewhere
              cost of participating in sports
              Souvenirs
              Shopping or any other personal expenditures Coverage for liability, medical assistance, including helicopter rescue
              extra services that are not specified in the plan
              The services provided for specially curated trip packages differ according to requirements because they are created expressly to meet individual demands.
              `
              
            
            }
          />
        ),
      },
      {
        title: `Do you provide travel insurance?`,
        content: (
          <AnswerSection
            content={`We do not offer medical assistance, travel liability insurance, or helicopter rescue coverage. Before embarking on the journey, participants are urged to purchase travel insurance from a reputable provider. Please see our insurance policy for more information.`}
          />
        ),
      },
      {
        title: `How can I apply for a visa to Pakistan?`,
        content: (
          <AnswerSection
            content={`The National Database & Registration Authority (NADRA) will be your primary source of information. A list of nations that are eligible for E-Visa services can be seen by clicking this link. Online applications are open to residents of more than 179 different nations. The list of Pakistani embassies throughout the world is provided here for individuals who are unable to use the online services. 
            If you want to travel to Pakistan with Facing North, we may provide you with a letter of intent (LOI) to help you start the visa application process. Just send us a scan of your passport. For additional information on the visa application procedure, visit this blog. 
            To ensure there are no delays or last-minute panic attacks, it is preferable to allocate three months for the application procedure. Visa processing is likely to take 1-2 weeks on average, however it's better to be safe than sorry.`}
          />
        ),
      },
      {
        title: `How many people will be on a group tour?`,
        content: (
          <AnswerSection
            content={`The majority of our public trips include groups of between 8 and 12 persons. Any size group, even lone travelers, can create a customized tour.`}
          />
        ),
      },

      {
        title: `Will we have free time to ourselves during an ongoing tour?`,
        content: (
          <AnswerSection
            content={`Yes, you are welcome to relax in a location of your choice. As long as we aren't continuing on to a new location on the same day, we won't prevent you from skipping any particular day activity. 
            You are welcome to spend some time in the town or village to unwind or go out and explore at your convenience. Activities like trekking and hiking are entirely up to your own preference.`}
          />
        ),
      },

      {
        title: `Can I make any changes to the itinerary of my tour?`,
        content: (
          <AnswerSection
            content={`Customized trips are totally adaptable and can be changed to meet your needs. Public group excursions cannot have their schedules changed without the approval of all participants and tour guides. However, you can always choose to forego some activities and go exploring on your own.`}
          />
        ),
      },

      {
        title: `I have special dietary requirements – will they be catered for?`,
        content: (
          <AnswerSection
            content={`On your itinerary, it might not always be possible to satisfy everyone's dietary needs. However, vegetarian and non-vegetarian options can be found anywhere. Any dietary restrictions or allergies should be disclosed at the time of booking, and we'll make sure your tour guide is aware of them while you're out on the road.`}
          />
        ),
      },

      {
        title: `Will there be a mobile network?`,
        content: (
          <AnswerSection
            content={`Even though some of our remote locations have spotty mobile service, we can still set up a local SIM card for you if you let us know what you need (just make sure your phone is unlocked!).`}
          />
        ),
      },

      {
        title: `What do I need to bring with me on a tour?`,
        content: (
          <AnswerSection
            content={`What you choose to carry is entirely up to you, but you can use our suggested packing list as a general outline while you get ready for your journey. It's a standard packing list. Depending on the demands of your tour and your particular travel preferences, you can change.`}
          />
        ),
      },

      {
        title: `What type of clothing is acceptable in Pakistan?`,
        content: (
          <AnswerSection
            content={`Given that Pakistan is an extremely conservative Muslim nation, you should take extra care with your attire. 
            In public, all sexes are recommended to keep their shoulders, arms, and legs covered. T-shirts and jeans or trousers are appropriate for men practically anywhere. The traditional dress and pant set known as a shalwar kameez is best and most comfortable for both men and women. 
            Shirts for women often have sleeves that are at least 3/4 length and cover your butt. The best clothing to wear is looser clothing that conceals your body's shape; keep cleavage- and curve-revealing attire at home. Long pants are essential, but as long as your butt is covered by your shirt, tighter apparel, such as narrow jeans and leggings, won't draw too much attention. 
            In the mountains, you can dress a little more freely because locals are accustomed to seeing tourists trekking in a variety of outfits. Even though we still advise wearing long sleeves, if you plan to walk all day you can get away with wearing a t-shirt. Please don't wear shorts again. 
            Outside of mosques, it is not compulsory to cover your head, however women should always carry a scarf. If you feel uneasy, you can wear it to conceal your chest in more conservative settings like bazaars or your head in religious settings.`}
          />
        ),
      },

      {
        title: `What will the weather be like?`,
        content: (
          <AnswerSection
            content={`In Pakistan, the summer months of May through September are exceptionally hot, with city temperatures exceeding 40°C. Even at the height of summer, the weather in the north often remains nice and can get chilly at night. 
            Wintertime lows in the highlands can be as low as 0°C, while city highs can range from 10°C to 20°C`}
          />
        ),
      },

      {
        title: `What will the infrastructure be like?`,
        content: (
          <AnswerSection
            content={`Things don't always go as planned in Pakistan. Road closures resulting from slides might last for hours. Unhappy officials could hinder our travels. There may be delays on religious holidays. 
            We are aware that this is the case and have fallback strategies ready at all times. We merely ask that you arrive prepared and aware that not everything will always go as planned. If not, thanks for your understanding and patience. We'll do our best to come up with a solution as soon as we can.`}
          />
        ),
      },

      {
        title: `What type of transportation will be used?`,
        content: (
          <AnswerSection
            content={`Depending on the number of people, several modes of transportation are employed. Our fleet includes vans and coasters for larger group groupings. Cars or five-seaters are used for smaller gatherings. 4x4s are used on some of the more difficult mountain terrains. 
            Please read the directions provided for your particular tour.`}
          />
        ),
      },

      {
        title: `Are your excursions exclusively presented in English or Urdu, or are they also available in other languages?`,
        content: (
          <AnswerSection
            content={`The majority of the trips are offered in both English and Urdu. Please email us at info@facingnorth.pk if you have any language-specific requests.`}
          />
        ),
      },
    ],
  };

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <p className={classes.title}>FAQ</p>
        <Faq
          styles={{
            titleTextColor: "#176060",
            rowTitleColor: "#176060",
          }}
          data={data}
        />
      </div>
    </div>
  );
}

export default FaqContent;
